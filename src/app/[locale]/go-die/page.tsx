"use client";

import Navbar from "@/components/layouts/navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabaseClient } from "@/helpers/supabase";
import { Emoji } from "@/types";
import { pasteEmojiAtRandomCoordinates } from "@/utils/randomEmoji";
import { EMOJI } from "@/constants";

const GoDieIsrael = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [emojis, setEmojis] = useState<any>([]);
  const [pastedEmojis, setPastedEmojis] = useState<number[]>([]);

  const getData = async () => {
    const { data } = await supabaseClient().from("emojis").select();
    setEmojis(data);
  };

  const updateCountEmoji = async (id: number) => {
    const { data, error } = await supabaseClient()
      .from("emojis")
      .select("count")
      .eq("id", id);

    if (error) {
      return;
    }
    const newCount = data[0].count + 1;
    const { error: updateError } = await supabaseClient()
      .from("emojis")
      .update({ count: newCount })
      .eq("id", id);

    if (updateError) {
      console.error(updateError.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (emojis && emojis.length > 0) {
      emojis.forEach((emoji: Emoji) => {
        if (!pastedEmojis.includes(emoji.id)) {
          for (let i = 0; i < emoji.count; i++) {
            pasteEmojiAtRandomCoordinates(emoji);
          }
          setPastedEmojis((prev) => [...prev, emoji.id]);
        }
      });
    }
  }, [emojis]);

  const handleEmojiClick = (emoji: any) => {
    updateCountEmoji(emoji.id);
    setSelectedEmoji(emoji);
    pasteEmojiAtRandomCoordinates(emoji);
  };

  return (
    <div>
      <Navbar />
      <div className="pt-20 lg:pt-20 relative overflow-hidden h-[100vh]">
        <div className="relative emoji-container w-auto h-[80vh]">
          <Image
            src={"/fuck-israel.jpeg"}
            quality={75}
            alt={"fuck-israel"}
            fill
            priority
            className="opacity-50 object-center md:object-contain"
          />
        </div>
        <div className="flex justify-center">
          <div className="fixed  bottom-4 w-[22rem] rounded-lg bg-red-500/50 backdrop-blur-xl shadow-lg flex overflow-auto">
            <div className="flex justify-center items-center space-x-4 px-4 py-4">
              {EMOJI.map((item: any) => (
                <button
                  key={item.id}
                  className="px-4 py-2 bg-red-100 rounded-lg hover:scale-110 transition-all text-4xl"
                  onClick={() => handleEmojiClick(item)}
                >
                  {item.value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoDieIsrael;

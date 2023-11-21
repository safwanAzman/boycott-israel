import {  NextResponse ,NextRequest } from 'next/server'
import {initializeSupabaseClient} from '@/helpers/supabaseClient'

export async function GET(request: NextRequest) {
    try {
        const { data } = await initializeSupabaseClient()
            .from(`boycott`)
            .select()
            .order('id', { ascending: true });
            return NextResponse.json({ data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to Read data.' }, { status: 400 })
    }
}



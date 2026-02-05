import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// Coloquei as informações do cadastro no Supabase

const supabaseURL = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseURL, supabaseAnonKey)

async function getTables() {
    const { data, error } = await supabase.from('information_schema.tables').select('table_name').eq('table_schema', 'public')
    if (error) {
        console.error('Error fetching tables:', error)
    } else {
        data.forEach(table => {
            const p = document.createElement('p')
            p.textContent = `Schema: public, Table: ${table.table_name}`
            document.querySelector('#db-system').appendChild(p)
        })
    }
}

getTables()
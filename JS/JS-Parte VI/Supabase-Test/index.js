import { createClient } from '@supabase/supabase-js'

const supabaseURL = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(supabaseURL, supabaseAnonKey)

const { data, error } = await supabase.from('First_test').select('*')

if (error) {
    console.error('Error fetching data:', error)
    // Populate the main element with error
    const main = document.getElementById('db-system')
    main.innerHTML = '<h2>Error:</h2><pre>' + JSON.stringify(error, null, 2) + '</pre>'
} else {
    console.log('Data:', data)
    // Populate the main element
    const main = document.getElementById('db-system')
    main.innerHTML = '<h2>Data from Supabase:</h2><pre>' + JSON.stringify(data, null, 2) + '</pre>'
}
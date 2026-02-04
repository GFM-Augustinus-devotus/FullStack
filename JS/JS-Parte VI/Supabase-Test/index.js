import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://cem-agendamentos-supabase.5ja4nw.easypanel.host', '')

const schema = document.createElement('p')

schema.textContent = supabase.schema

document.querySelector('#db-system').append(schema)

function callSchema(){
    console.log(schema)
}

callSchema()
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const { data, error } = await supabase.auth.signUp({
  email: "gfreitasmelo67@gmail.com.com",
  password: "@GestaoDev2026",
});

console.log({ data, error });



// import { createClient } from "@supabase/supabase-js";

// const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// const supabase = createClient(supabaseURL, supabaseAnonKey);

// const main = document.getElementById("db-system");
// main.innerHTML = "<p>Carregando…</p>";

// const { data, error } = await supabase
//     .schema("cem")
//     .from("secretarias")
//     .select("*");

// if (error) {
//   console.error(error);
//   main.innerHTML =
//     "<h2>Error</h2><pre>" + JSON.stringify(error, null, 2) + "</pre>";
// } else {
//   main.innerHTML =
//     "<h2>Dados</h2><pre>" + JSON.stringify(data, null, 2) + "</pre>";
// }

import {createClient} from '@supabase/supabase-js';

const URL = process.env.REACT_APP_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

console.log(URL)
console.log("ho -")
export const supabase = createClient(URL, API_KEY)
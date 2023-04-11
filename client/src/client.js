import {createClient} from '@supabase/supabase-js';


const URL = import.meta.env.URL;

const API_KEY = import.meta.API_KEY;

export const supabase = createClient(URL, API_KEY)
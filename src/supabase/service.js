import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';
import {SUPABASE_URL, SUPABASE_KEY} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = SUPABASE_URL;
const supabaseKey = SUPABASE_KEY;

const options = {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
};

const supabase = createClient(supabaseUrl, supabaseKey, options);

export default supabase;

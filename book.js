import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js"

const supabaseUrl = 'https://tvehabpjvafoigfyiqwl.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2ZWhhYnBqdmFmb2lnZnlpcXdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMTM0NTYsImV4cCI6MjA1NzY4OTQ1Nn0.swxC141rhnWaNZ7l_OmJ9zkq3Sr0-ifki2NEN59ctVM'

const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
    .from('books')
    .select('*')
  let bookList = document.getElementById('books');
  
  for (let book of books) {
     bookList.innerHTML += `<tr><td>${book.id}</td><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`;
   }
}

getBooks();
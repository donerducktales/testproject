import { Inter, Plus_Jakarta_Sans, Source_Code_Pro, Work_Sans } from "next/font/google";

export const work_sans = Work_Sans({
   subsets: ['latin'],
   weight: ['400', '500' ,'600',],
});

export const inter = Inter({
   subsets: ['latin'],
   weight: ['400'],
});

export const plus_jakarta_sans = Plus_Jakarta_Sans({
   subsets: ['latin'],
   weight: ['400', '600', '800'],
});

export const source_serif_pro = Source_Code_Pro({
   subsets: ['latin'],
   weight: ['400'],
   style: ['normal', 'italic'],
});
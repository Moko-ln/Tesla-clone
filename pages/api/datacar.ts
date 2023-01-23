// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: Object
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data });
}


const data = [
  {
    model: "Model Y",
    imgUrl: ["model-y.jfif","model-y-mobile.jfif"],
    text: "Réservez votre essai",
    btn_top: "Véhicules disponibles",
    btn_bottom: "Configuration personnalisée",
    sub_text:["link", "En savoir plus sur Tesla for Business"],
    icon: true
  },
  {
    model: "Model 3",
    imgUrl: ["model-3.jfif", "model-3-mobile.jfif"],
    text: "Réservez votre essai",
    btn_top: "Véhicules disponibles",
    btn_bottom: "Configuration personnalisée",
    sub_text:["text","A reçu la note maximale de 5 étoiles par Euro NCAP"]
  },
  {
    model: "Model S",
    imgUrl: ["model-s.webp", "model-s-mobile.webp"],
    btn_top: "Véhicules disponibles",
    btn_bottom: "Configuration personnalisée",
  },
  {
    model: "Model X",
    imgUrl: ["model-x.webp", "model-x-mobile.webp"],
    
    btn_top: "Véhicules disponibles",
    btn_bottom: "Configuration personnalisée",
  }
]


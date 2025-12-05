// services/api.ts
const BASE_URL = "https://sameeramart.com/app-pos/api";

export async function getBanner( {id} : {id:string}) {
  const res = await fetch(`${BASE_URL}/get-banner-by-id`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify( { pusat_id: id } ),
    next: { revalidate: 3600 }
  });

  return res.json();
}

export async function getBarang( {id, page, search} : {id:string, page:number, search: String}) {
  const res = await fetch(`${BASE_URL}/get-all-barang`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify( { page: page, pusat_id: id, params: search } ),
    next: { revalidate: 60 }
  });
  return res.json();
}

export async function getAboutMe({id} : {id:string}){
  const res = await fetch(`${BASE_URL}/about-me`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify( { pusat_id: id } ),
    next: { revalidate: 60 }
  });
  return res.json();
}

export async function getPromo( {id} : {id:string}) {
  const res = await fetch(`${BASE_URL}/get-promo-by-id`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify( { pusat_id: id } ),
    next: { revalidate: 60 }
  });
  return res.json();
}

export async function getTerbanyak( {id} : {id:string}) {
  const res = await fetch(`${BASE_URL}/get-terbanyak`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify( { pusat_id: id } ),
  });
  return res.json();
}

export async function getPref( {id, prefName} : {id:string, prefName:string}) {
  const res = await fetch(`${BASE_URL}/get-pref`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify( { pusat_id: id, pref_name: prefName } ),
    // cache: "no-store",
    next: { revalidate: 1 }
  });
  return res.json();
}

export async function getDataWebsite( {id, endPoint} : {id:string, endPoint:string}) {
  const res = await fetch(`${BASE_URL}/${endPoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify( { pusat_id: id } ),
    next: { revalidate: 60 }
  });
  return res.json();
}

// export async function getProducts() {
//   const res = await fetch(`${BASE_URL}/products`, {
//     cache: "no-store", // selalu ambil terbaru
//   });
//   return res.json();
// }

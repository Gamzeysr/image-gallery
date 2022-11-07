import React from 'react';
import data from "../helper/data";
import Picture from "../components/Picture";

const Homepage = () => {
    return (
        <div>
            <h1>ALBUMS</h1>
            <div>
                {data.map((item) => {

                    return (<Picture data={item} />
                        // BUrada verilerin için de ne varsa aldım o yüzden dest yapmadım
                    )
                })}
            </div>
        </div>
    )
}

export default Homepage;

//! Bu component benim verilerimi çekecek oldugum dosyam.
//! Burada verilerimi cekip componentin içindeki picture.jsx de verimi yakalayıp ekrana bastırcam
//* ✨Bunun için bu sayfa da ilk önce verilerimi getircem verilerimde burada data.js in içinde data.js yi buraya import edip tek tek içinde map ile gezip lazım olanları dest yöntemi ile kullanıcam 
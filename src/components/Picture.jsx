import React from 'react';

const Picture = ({ data }) => {
    return (
        <div className="picture">
            <div className="pictureItem">
                <div className="imageContainer">
                    <figure  >
                        <img
                            src={data.src.large} alt="figure-img" />

                        <figcaption className=" infoPhotographer ">
                            <p style={{ color: "Purple" }}>{data.photographer}</p>
                        </figcaption>
                    </figure>
                    {/*✨✨ Burada ki figure ve figcaption u kullanmamızın sebebi resimleri ve altında ki yazıyı olustursun diye koyuyoruz.Bu sekilde figure içine resimli verimizi cektik figcaption da resimin altındaki yazı verisi  */}


                </div>
            </div>
        </div>
    )
}
export default Picture;
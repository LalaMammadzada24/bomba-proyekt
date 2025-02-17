import React from 'react'
import { useTranslation } from 'react-i18next';

const ExtensivePlants = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="extensiveplants p-5 my-5">
                <div className="row">
                    <div className="extensive-plants-title col-12 col-sm-10 col-md-9 col-lg-8">
                        {t("extensive.0")}<img className='mx-2' src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/ps-top-min-1.png" alt="..." />  {t("extensive.1")}
                        <img className='mx-2' src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/ps-top-min-2.png" alt="..." />  {t("extensive.2")}
                        <img className='mx-2' src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/ps-top-min-3.png" alt="..." />  {t("extensive.3")}
                    </div>
                <div className="extensive-column-1 col-12 col-sm-12 col-md-12 col-lg-5 p-5 my-5">
                    <img className='mb-2' src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/quotes.svg" alt="..." />
                    <h2 className='pb-5'>{t("extensive.4")}</h2>
                    <div className="card mb-0 border-0">
                        <div className="row g-0 ">
                            <div className="col-md-2">
                                <img  src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-teammember-circle-mini-60x60.png" className="img-fluid mt-3" alt="..." />
                            </div>
                            <div className="col-md-10 ">
                                <div className="card-body mb-0">
                                    <h5 className="card-title">Jenny Wilson</h5>
                                    <p className="card-text mb-0">{t("extensive.5")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="extensive-column-2 col-12 col-sm-12 col-md-12 col-lg-7 my-5">
                    <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-ps-video-thumbnail-opt.jpg?id=867" alt="..." />
                </div>
            </div>
                </div>
        </>
    )
}

export default ExtensivePlants
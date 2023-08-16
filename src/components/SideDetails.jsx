import { useEffect, useState } from "react"
import axios from "axios";
import { detailOpt } from "../helpers/constant";



const SideDetails = ({detailId,setShowDetail}) => {
  const [d,setDetail]=useState(null);

  // id her değiştiğinde o id'ye sahip uçağın detaylarını alır.
useEffect(()=>{
  setDetail(null);
  axios.get(`https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,detailOpt)
  .then((res)=>setDetail(res.data))


},[detailId])

  return (
    <div className="detail">
        <div className="detail-inner">

            <p onClick={()=>setShowDetail(false)} >
              <span className="close">X</span></p>
            {!d ? (<p className="load">Yükleniyor..</p>) : (<>
            <h2 > <span className="purple-text"> Model:</span> {d.aircraft.model?.text}</h2>
            <h2><span className="purple-text"> Kod:</span> {d.aircraft.model?.code}</h2>
            <p>
            <span className="purple-text"> Uyruk No:</span> {d.aircraft?.registration}
            </p>
            <img src={d.aircraft?.images?.large[0]?.src} />
            <h2><span className="purple-text"> Şirket:</span> {d.airline?.short}</h2>
            <p>
              Kalkış: <a href={d.airport.origin?.website}>{d.airport.origin?.name}</a>
              
            </p>
            <p>
              İniş: <a href={d.airport.destination?.website}>{d.airport.destination?.name}</a>
              
            </p>
            <p >
              Durum: <span className="status" style={{background:d.status.icon}}>{d.status.text}</span>
            </p>
          
            
            </>)}
        </div>
    </div>
  )
}

export default SideDetails
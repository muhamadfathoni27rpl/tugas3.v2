import React from 'react'
class Beranda extends React.Component{
    render(){
        return(
            <div>
                <img style={{marginTop : '0.5%' , width : '100%' , height : '50%'}} src={process.env.PUBLIC_URL+"/gambar/adiwiyata.jpg"}  />
                <h2 style={{fontFamily: 'Droid Sans',fontWeight:'bold'}}>Selamat datang</h2>
                <h5>di program sekolah Adiwiyata</h5>
                <div style={{marginTop:'3%'}}>
                    <p style={{fontWeight:'normal'}}>Adiwiyata adalah upaya membangun program atau wadah yang baik dan ideal untuk mendapatkan ilmu pengetahuan dan berbagai
                         norma serta etika yang dapat menjadi dasar manusia menuju terciptanya kesejahteraan hidup untuk Cita-cita pembangunan berkelanjutan.
                         Adiwiyata merupakan nama program pendidikan lingkungan hidup.</p>
                </div>
            </div>
        )
    }
}
export default Beranda
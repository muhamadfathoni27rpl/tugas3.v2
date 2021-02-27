import React, {Component} from "react";  
import $ from "jquery";
import Card from "./Card";
class ListKeranjang extends Component {  
    constructor(){
        super()
        this.state = {
            barang          : [  
                {no: 1, namaBarang: "Nuklir",   hargaBarang: 500 , jumlah : 0},  
                {no: 2, namaBarang: "Atom",     hargaBarang: 400 , jumlah : 0},  
                {no: 3, namaBarang: "Panci",    hargaBarang: 300 , jumlah : 0},  
            ],
            keranjang       : 0,
            action          : "",
            selectedItem    : null,
        }
    }

    tambahAgenda = () => {
        $("#modalAgenda").modal("show")
        this.setState({                                     
            no              : (this.state.barang.length)+1 ,
            hargaBarang        : "",
            namaBarang         : "",
            action          : "nambahAgendaGaskan"
        })
    }

    editAgenda = (item) => {
        if(this.state.keranjang > 0){
            window.alert('Kosongkan Keranjang terlebih dahulu')    
        }else{
            $("#modalAgenda").modal("show")
            this.setState({
                no              : item.no,
                namaBarang      : item.namaBarang,
                hargaBarang     : item.hargaBarang,
                action          : "editAgendaGaskan",
                selectedItem    : item
            })
        }
    }

    Save = (event) => {
        event.preventDefault();
        let keranjangSetting = this.state.barang
        if (this.state.action === "nambahAgendaGaskan") {
            keranjangSetting.push({                       // <= Di Tambah
                no             : this.state.no,
                namaBarang     : this.state.namaBarang,
                hargaBarang    : parseInt(this.state.hargaBarang),
                jumlah         : 0
            })
        }else if(this.state.action === "editAgendaGaskan"){
            let index                               = keranjangSetting.indexOf(this.state.selectedItem)
            keranjangSetting[index].namaBarang     = this.state.namaBarang
            keranjangSetting[index].hargaBarang    = parseInt(this.state.hargaBarang)
        }
        this.setState({buku : keranjangSetting})          
        $("#modalAgenda").modal("hide")
        console.log(this.state.barang);
    }

    hapusAgenda = (item) => {
        if(this.state.keranjang > 0){
            window.alert('Kosongkan Keranjang terlebih dahulu')    
        }else{
            if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){
                let keranjangSetting   = this.state.barang
                let index           = keranjangSetting.indexOf(item)
                keranjangSetting.splice(index, 1)               // <= Menghapus
                this.setState({barang: keranjangSetting})
            }
        }
    }

    tambahBarang = (item) => {
        let keranjangSet = this.state.barang
        let barange      = keranjangSet[keranjangSet.indexOf(item)]
        this.setState({})
        barange.jumlah          += 1                  // <= Jumlah Kuantitas Barang nya +1
        this.state.keranjang    += item.hargaBarang   // <= Total nya ditambahkan dengan harga Barang
    }
    kurangBarang = (item) => {
        let keranjangSet = this.state.barang
        let barange      = keranjangSet[keranjangSet.indexOf(item)]
        this.setState({})
        if(barange.jumlah > 0 ){                    // <= Jika barang yang dikurangi itu kurang dari 0
            barange.jumlah             -= 1                  // <= Jumlah Kuantitas Barang nya -1
            this.state.keranjang       -= item.hargaBarang   // <= Total nya dikurangi dengan harga Barang
        }

    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">ID Kegiatan</th>
                            <th scope="col">Nama </th>
                            <th scope="col">Harga</th>
                            <th scope="col">Pengaturan</th>
                            <th scope="col">Menu</th>
                            <th scope="col">Jumlah</th>
                            </tr>
                    </thead>
                    <tbody>
                    { this.state.barang.map( (item, index) => (

                        <tr>
                            <th scope="row">{ item.no }</th>
                            <td>{ item.namaBarang}</td>
                            <td>{ item.hargaBarang}</td>
                            <td>
                                <button className="btn btn-sm btn-warning m-1" onClick={() => this.editAgenda(item)}>Edit</button>
                                <button className="btn btn-sm btn-danger m-1"  onClick={() => this.hapusAgenda(item)}>Hapus</button>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-primary m-1" onClick={() => this.tambahBarang(item)}><i class="fas fa-plus"></i></button>
                                <button className="btn btn-sm btn-info m-1"    onClick={() => this.kurangBarang(item)}><i class="fas fa-minus"></i></button>
                            </td>
                            <td>
                                {item.jumlah}
                            </td>
                        </tr>
                    )) }
                        <tr>
                            <td>Total </td>
                            <td>
                                <strong>Rp. {this.state.keranjang}</strong>
                            </td>
                        </tr>
                    </tbody>
                    </table>                            
                </div>
                <button className="btn btn-success" onClick={() => this.tambahAgenda()}>Tambah Data</button>

                <div className="modal" id="modalAgenda">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">Form Keranjang</div>                            
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Barang
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.namaBarang} onChange={ ev => this.setState({namaBarang: ev.target.value}) }required />
                                    
                                    Harga
                                    <input type="number" className="form-control mb-2"
                                    value={this.state.hargaBarang} onChange={ ev => this.setState({hargaBarang: ev.target.value}) }required />
                                    <button className="btn btn-info btn-block" type="submit">Simpan</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}  
export default ListKeranjang
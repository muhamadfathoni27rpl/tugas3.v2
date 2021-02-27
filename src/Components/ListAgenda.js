import React, {Component} from "react";  
import $ from "jquery";
import Card from "./Card";
class ListAgenda extends Component {  
    constructor(){
        super()
        this.state = {
            agenda          : [  
                {no: 1, tanggal: "10 JANUARI", kegiatan: "Hari Perencanaan Gerakan 1 Juta Pohon"},  
                {no: 2, tanggal: "2 FEBRUARI", kegiatan: "Hari Lahan Basah Se Dunia"},  
                {no: 3, tanggal: "21 FEBRUARI", kegiatan: "Hari Peduli Sampah Nasional"},  
            ],
            action          : "",
            selectedItem    : null,
        }
    }

    tambahAgenda = () => {
        $("#modalAgenda").modal("show")
        this.setState({                                     
            no              : (this.state.agenda.length)+1 ,
            kegiatan        : "",
            tanggal         : "",
            action          : "nambahAgendaGaskan"
        })
    }

    editAgenda = (item) => {
        $("#modalAgenda").modal("show")
        this.setState({
            no              : item.no,
            tanggal         : item.tanggal,
            kegiatan        : item.kegiatan,
            action          : "editAgendaGaskan",
            selectedItem    : item
        })
    }

    Save = (event) => {
        event.preventDefault();
        let agendaSetting = this.state.agenda
        if (this.state.action === "nambahAgendaGaskan") {
            agendaSetting.push({                       // <= Di Tambah
                no          : this.state.no,
                kegiatan    : this.state.kegiatan,
                tanggal     : this.state.tanggal,
            })
        }else if(this.state.action === "editAgendaGaskan"){
            let index                       = agendaSetting.indexOf(this.state.selectedItem)
            agendaSetting[index].kegiatan    = this.state.kegiatan
            agendaSetting[index].tanggal     = this.state.tanggal
        }
        this.setState({buku : agendaSetting})          
        $("#modalAgenda").modal("hide")
    }

    hapusAgenda = (item) => {
        if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){
            let agendaSetting   = this.state.agenda
            let index           = agendaSetting.indexOf(item)
            agendaSetting.splice(index, 1)               // <= Menghapus
            this.setState({agenda: agendaSetting})
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
                            <th scope="col">Tanggal </th>
                            <th scope="col">Nama</th>
                            <th scope="col">Pengaturan</th>
                            </tr>
                    </thead>
                    <tbody>
                    { this.state.agenda.map( (item, index) => (
                        <Card
                            noAgenda          =  {item.no}
                            tanggalAgenda     =  {item.tanggal}
                            kegiatanAgenda    =  {item.kegiatan}
                            editAgenda        =  { () => this.editAgenda(item)}
                            hapusAgenda       =  { () => this.hapusAgenda(item)}
                        />
                    )) }
                    </tbody>
                    </table>                            
                </div>
                <button className="btn btn-success" onClick={() => this.tambahAgenda()}>Tambah Data</button>

                <div className="modal" id="modalAgenda">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">Form Agenda</div>                            
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Agenda
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.kegiatan} onChange={ ev => this.setState({kegiatan: ev.target.value}) }required />
                                    
                                    Tanggal
                                    <input type="text" className="form-control mb-2"
                                    value={this.state.tanggal} onChange={ ev => this.setState({tanggal: ev.target.value}) }required />
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
export default ListAgenda;
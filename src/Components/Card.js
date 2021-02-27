import React from "react"

class Card extends React.Component{
    render(){
        return (
            
            <tr>
                <th scope="row">{ this.props.noAgenda }</th>
                <td>{ this.props.tanggalAgenda}</td>
                <td>{ this.props.kegiatanAgenda}</td>
                <td><button className="btn btn-sm btn-primary m-1" onClick={this.props.editAgenda}>Edit</button>
                <button className="btn btn-sm btn-danger m-1"  onClick={this.props.hapusAgenda}>Hapus</button></td>
            </tr>

        )
    }
}
export default Card;
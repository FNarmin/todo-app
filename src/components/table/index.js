export default function Table ({datas, sil, setSil}) {
    return (
        <div>
        <table className='table  table-hover border'>
            <thead>
<tr>
<th>Full name</th>
<th>Age</th>
<th>Position</th>
<th>Phone</th>
<th>Edit</th>
<th>Delete</th>
</tr>
</thead>
<tbody>
{datas.map((data, index) => (<tr key={index}>
<td>{data.fullName}</td>
<td>{data.age}</td>
<td>{data.position}</td>
<td>{data.phone}</td>
<td><button  className="btn btn-warning">Edit</button></td>
<td><button className="btn btn-danger" onClick={()=>{
        datas.splice(index, 1);
        if(sil) {
          setSil(false);
        }
        console.log(datas);}} >Delete</button></td>
</tr>))}
</tbody>
</table>
</div>
    )
}
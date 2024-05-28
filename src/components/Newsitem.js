import React from 'react'

const Newsitem =(props)=> {

    let {title,description,imageUrl,newsUrl,author,date} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={imageUrl?imageUrl : "https://images.pexels.com/photos/242492/pexels-photo-242492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Anonymos"} on {new Date(date).toUTCString()}</small></p>
            <a  rel = ""href={newsUrl} target='-blank' className="btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }

export default Newsitem


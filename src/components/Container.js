const Container = ({ account, assets }) => {
  const styleConfig = {
    backgroundColor: "#F8F9FA",
  }

  // <ul>
  //     {animals.map(animal => (
  //       <li>{animal}</li>
  //     ))}
  //   </ul>

  return (
    <div className="container">
      <p>Your address is: {account}</p>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {assets.map(asset => (
          <div className="col">
            <div className="card shadow-sm">
              <img src={asset.image_thumbnail_url} alt={asset.id}/>
              {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                <div className="card-body">
                  <p className="card-text">{asset.id}</p>
                  <p className="card-text">{asset.title}</p>
                  <p className="card-text">{asset.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
        </div>
        ))}

      </div>
    </div>
  )
}

      export default Container;

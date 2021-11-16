import React, { Component, Fragment } from 'react'
import './EditMovie.css'

export default class EditMovie extends Component {
    state = {
        movie: {},
        isLoaded: false,
        error: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            movie: {
                id: 0,
                title: "",
                release_date: "",
                runtime: "",
                rating: "",
                mpaa_rating: "",
                description: "",
            },
            isLoaded: false,
            error: null,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (evt) => {
        console.log("Form was submitted");
        evt.preventDefault();
    }

    handleChange = (evt) => {
        let value = evt.target.value;
        let name = evt.target.name;
        this.setState((prevState) => ({
            movie:{
                ...prevState.movie,
                [name]: value,
            }
        }))
    }

    componentDidMount() {
       
    }

    render() {
        let { movie } = this.state;

        return (
            <Fragment>
                <h2>Add/Edit Movie</h2>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="hidden"  
                        name="id"
                        id="id"
                        value={movie.id}
                        onChange={this.handleChange}
                    />
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            value={movie.title} 
                            onChange={this.handleChange}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="release_date" className="form-label">
                            Release date
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="release_date"
                            id="release_date"
                            value={movie.release_date}
                            onChange={this.handleChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="runtime" className="form-label">
                            Runtime
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="runtime"
                            id="runtime"
                            value={movie.runtime} 
                            onChange={this.handleChange}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="mpaa_rating" className="form-label">
                            MPAA Rating
                        </label>
                        <select className="form-select" name="mpaa_rating" value={movie.mpaa_rating} onChange={this.handleChange}>
                            <option className="form-select" >Choose...</option>
                            <option className="form-select" value="G">General</option>
                            <option className="form-select" value="PG">PG</option>
                            <option className="form-select" value="PG13">PG13</option>
                            <option className="form-select" value="R">R</option>
                            <option className="form-select" value="NC17">NC17</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="rating" className="form-label">
                            Rating
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="rating"
                            id="rating"
                            value={movie.rating} 
                            onChange={this.handleChange}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <textarea 
                            className="form-control" 
                            name="description" 
                            id="description"
                            rows="3" 
                            onChange={this.handleChange}
                            value={movie.value}
                        />
                        
                    </div>
                    <hr />
                    <button className="btn btn-primary">Save</button>
                </form>

                <div className="mt-3">
                    <pre>{JSON.stringify(this.state, null, 3)}</pre>
                </div>
            </Fragment>
        )
    }
}
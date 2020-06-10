import React, { Component } from 'react';

class Albuns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albuns: null
        };
    }

    async componentDidMount() {
        let albuns = await this.props.albuns.then(albuns => {
            return albuns.map(album => {
                return <p>{album.name}</p>
            });
        });

        this.setState({
            albuns: albuns
        });
    }

    render () {
        if (this.state.albuns) {
            return (
                <div>
                    {this.state.albuns}
                </div>
            );
        } else {
            return <p>Loading....</p>
        }
    }
}

export default Albuns;
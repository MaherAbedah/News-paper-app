import React from 'react'
import ImageUploader from 'react-images-upload';
import myImage from '../images/profile-placeholder.png'; 

export default class EditImage extends React.Component {

  constructor(props) {
    super(props);
     this.state = { pictures: [] };
     this.onDrop = this.onDrop.bind(this);
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
            pictures: this.state.pictures.concat(pictureFiles),
        });
    console.log(this.state.pictures)
  }

  render() {
      return (
          <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
          />
      );
  }
}
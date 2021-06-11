import classNames from 'classnames';
import React from 'react';
const styles = require('./Input.module.scss').default;

interface Props {
  value?: string
  placeholder?: string
  name?: string
  label?: string
  src: string
  setValue?: (target: Object) => void
  handleChangeImage: (src: string) => void
}

const ImageLoader: React.FC<Props> = ({ label, handleChangeImage, src }) => {
  const [clicked, setClicked] = React.useState(false);
  const [imageExist, setImageExist] = React.useState(false);
  const fileInput = React.useRef();

  function handleSubmit(event) {
    event?.preventDefault();
    const reader = new FileReader();

    reader.onloadend = function () {
      handleChangeImage(reader.result)
    }

    if (fileInput.current.files[0]) {
      setClicked(false);
      reader.readAsDataURL(fileInput.current.files[0]);
      setImageExist(true)
    } else {
      handleChangeImage('')
      setImageExist(false);
    }
  }

  return (
    <div className={styles.container}>
      <label className={classNames(styles.label, styles.label_file)}>{label}</label>
      <div className={styles.row}>
        <div className={styles.fileContainer}>
          <label htmlFor="file-input">
            <img src={require('../images/filePicker.png')} />
          </label>

          <input
            id="file-input"
            type="file"
            ref={fileInput}
            onChange={handleSubmit}
          />
        </div>


        {!clicked && (
          <div className={styles.image}>
            {imageExist && (
              <>
                <img src={src} alt="" width="100px" />
                <div className={styles.deleteButton} onClick={() => setClicked(true)}>x</div>
              </>
            )}
          </div>
        )}


      </div>
      <div className={styles.imageText}>
        <div>Главная фотография</div>
        <span>(обложка мероприятия)</span>
      </div>
    </div>
  );
}

export default ImageLoader;
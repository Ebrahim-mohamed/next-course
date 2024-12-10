"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import classes from "./image-picker.module.css";
export default function ImagePicker({ labal, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef();
  function handelPickImage() {
    imageInput.current.click();
  }
  function handelChangeImage(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <labal htmlFor={name}>{labal}</labal>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>no picked Image yet</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="image selected by user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          accept="image/png, image/jpeg"
          id={name}
          name={name}
          ref={imageInput}
          onChange={handelChangeImage}
        />
        <button
          onClick={handelPickImage}
          type="button"
          className={classes.button}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

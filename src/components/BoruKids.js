import React from 'react';
import Modal from "react-responsive-modal";

const BoruKids = ({ open, close }) => (
    <Modal open={open} onClose={close} center>
    <h2>BoruKids</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
      pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
      hendrerit risus, sed porttitor quam.
    </p>
  </Modal>
)

export default BoruKids;
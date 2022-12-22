import React, { useState } from "react";

import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const modal = (
    <Modal
      onClose={handleClose}
      actionBar={
        <Button onClick={handleClose} primary>
          I accept!
        </Button>
      }
    >
      <p>Here is an important agreement for you to accept!</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        mauris leo, tincidunt et hendrerit volutpat, viverra sit amet turpis.
        Vivamus odio orci, vulputate sit amet ultrices nec, ullamcorper eget
        velit. Mauris porttitor orci quis lorem tristique pretium non eu felis.
        Suspendisse vel ligula dolor. Fusce mollis eros sed lorem scelerisque,
        ut fringilla neque suscipit. Sed suscipit nec sapien at facilisis. In
        sed ipsum non velit placerat consequat. Pellentesque vehicula tellus
        eget lacus semper, quis tincidunt est imperdiet. Curabitur felis ligula,
        maximus non interdum vitae, fermentum eget massa. Aliquam egestas sed
        arcu sit amet hendrerit. Donec tincidunt enim nec nibh aliquet, a
        interdum risus sodales. Nam convallis orci orci, et consequat nulla
        imperdiet eu. Donec feugiat felis iaculis dignissim facilisis. Praesent
        molestie accumsan vulputate. Phasellus venenatis tellus ac neque
        pharetra, eu sagittis eros porttitor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        mauris leo, tincidunt et hendrerit volutpat, viverra sit amet turpis.
        Vivamus odio orci, vulputate sit amet ultrices nec, ullamcorper eget
        velit. Mauris porttitor orci quis lorem tristique pretium non eu felis.
        Suspendisse vel ligula dolor. Fusce mollis eros sed lorem scelerisque,
        ut fringilla neque suscipit. Sed suscipit nec sapien at facilisis. In
        sed ipsum non velit placerat consequat. Pellentesque vehicula tellus
        eget lacus semper, quis tincidunt est imperdiet. Curabitur felis ligula,
        maximus non interdum vitae, fermentum eget massa. Aliquam egestas sed
        arcu sit amet hendrerit. Donec tincidunt enim nec nibh aliquet, a
        interdum risus sodales. Nam convallis orci orci, et consequat nulla
        imperdiet eu. Donec feugiat felis iaculis dignissim facilisis. Praesent
        molestie accumsan vulputate. Phasellus venenatis tellus ac neque
        pharetra, eu sagittis eros porttitor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        mauris leo, tincidunt et hendrerit volutpat, viverra sit amet turpis.
        Vivamus odio orci, vulputate sit amet ultrices nec, ullamcorper eget
        velit. Mauris porttitor orci quis lorem tristique pretium non eu felis.
        Suspendisse vel ligula dolor. Fusce mollis eros sed lorem scelerisque,
        ut fringilla neque suscipit. Sed suscipit nec sapien at facilisis. In
        sed ipsum non velit placerat consequat. Pellentesque vehicula tellus
        eget lacus semper, quis tincidunt est imperdiet. Curabitur felis ligula,
        maximus non interdum vitae, fermentum eget massa. Aliquam egestas sed
        arcu sit amet hendrerit. Donec tincidunt enim nec nibh aliquet, a
        interdum risus sodales. Nam convallis orci orci, et consequat nulla
        imperdiet eu. Donec feugiat felis iaculis dignissim facilisis. Praesent
        molestie accumsan vulputate. Phasellus venenatis tellus ac neque
        pharetra, eu sagittis eros porttitor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        mauris leo, tincidunt et hendrerit volutpat, viverra sit amet turpis.
        Vivamus odio orci, vulputate sit amet ultrices nec, ullamcorper eget
        velit. Mauris porttitor orci quis lorem tristique pretium non eu felis.
        Suspendisse vel ligula dolor. Fusce mollis eros sed lorem scelerisque,
        ut fringilla neque suscipit. Sed suscipit nec sapien at facilisis. In
        sed ipsum non velit placerat consequat. Pellentesque vehicula tellus
        eget lacus semper, quis tincidunt est imperdiet. Curabitur felis ligula,
        maximus non interdum vitae, fermentum eget massa. Aliquam egestas sed
        arcu sit amet hendrerit. Donec tincidunt enim nec nibh aliquet, a
        interdum risus sodales. Nam convallis orci orci, et consequat nulla
        imperdiet eu. Donec feugiat felis iaculis dignissim facilisis. Praesent
        molestie accumsan vulputate. Phasellus venenatis tellus ac neque
        pharetra, eu sagittis eros porttitor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        mauris leo, tincidunt et hendrerit volutpat, viverra sit amet turpis.
        Vivamus odio orci, vulputate sit amet ultrices nec, ullamcorper eget
        velit. Mauris porttitor orci quis lorem tristique pretium non eu felis.
        Suspendisse vel ligula dolor. Fusce mollis eros sed lorem scelerisque,
        ut fringilla neque suscipit. Sed suscipit nec sapien at facilisis. In
        sed ipsum non velit placerat consequat. Pellentesque vehicula tellus
        eget lacus semper, quis tincidunt est imperdiet. Curabitur felis ligula,
        maximus non interdum vitae, fermentum eget massa. Aliquam egestas sed
        arcu sit amet hendrerit. Donec tincidunt enim nec nibh aliquet, a
        interdum risus sodales. Nam convallis orci orci, et consequat nulla
        imperdiet eu. Donec feugiat felis iaculis dignissim facilisis. Praesent
        molestie accumsan vulputate. Phasellus venenatis tellus ac neque
        pharetra, eu sagittis eros porttitor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        mauris leo, tincidunt et hendrerit volutpat, viverra sit amet turpis.
        Vivamus odio orci, vulputate sit amet ultrices nec, ullamcorper eget
        velit. Mauris porttitor orci quis lorem tristique pretium non eu felis.
        Suspendisse vel ligula dolor. Fusce mollis eros sed lorem scelerisque,
        ut fringilla neque suscipit. Sed suscipit nec sapien at facilisis. In
        sed ipsum non velit placerat consequat. Pellentesque vehicula tellus
        eget lacus semper, quis tincidunt est imperdiet. Curabitur felis ligula,
        maximus non interdum vitae, fermentum eget massa. Aliquam egestas sed
        arcu sit amet hendrerit. Donec tincidunt enim nec nibh aliquet, a
        interdum risus sodales. Nam convallis orci orci, et consequat nulla
        imperdiet eu. Donec feugiat felis iaculis dignissim facilisis. Praesent
        molestie accumsan vulputate. Phasellus venenatis tellus ac neque
        pharetra, eu sagittis eros porttitor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        mauris leo, tincidunt et hendrerit volutpat, viverra sit amet turpis.
        Vivamus odio orci, vulputate sit amet ultrices nec, ullamcorper eget
        velit. Mauris porttitor orci quis lorem tristique pretium non eu felis.
        Suspendisse vel ligula dolor. Fusce mollis eros sed lorem scelerisque,
        ut fringilla neque suscipit. Sed suscipit nec sapien at facilisis. In
        sed ipsum non velit placerat consequat. Pellentesque vehicula tellus
        eget lacus semper, quis tincidunt est imperdiet. Curabitur felis ligula,
        maximus non interdum vitae, fermentum eget massa. Aliquam egestas sed
        arcu sit amet hendrerit. Donec tincidunt enim nec nibh aliquet, a
        interdum risus sodales. Nam convallis orci orci, et consequat nulla
        imperdiet eu. Donec feugiat felis iaculis dignissim facilisis. Praesent
        molestie accumsan vulputate. Phasellus venenatis tellus ac neque
        pharetra, eu sagittis eros porttitor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        mauris leo, tincidunt et hendrerit volutpat, viverra sit amet turpis.
        Vivamus odio orci, vulputate sit amet ultrices nec, ullamcorper eget
        velit. Mauris porttitor orci quis lorem tristique pretium non eu felis.
        Suspendisse vel ligula dolor. Fusce mollis eros sed lorem scelerisque,
        ut fringilla neque suscipit. Sed suscipit nec sapien at facilisis. In
        sed ipsum non velit placerat consequat. Pellentesque vehicula tellus
        eget lacus semper, quis tincidunt est imperdiet. Curabitur felis ligula,
        maximus non interdum vitae, fermentum eget massa. Aliquam egestas sed
        arcu sit amet hendrerit. Donec tincidunt enim nec nibh aliquet, a
        interdum risus sodales. Nam convallis orci orci, et consequat nulla
        imperdiet eu. Donec feugiat felis iaculis dignissim facilisis. Praesent
        molestie accumsan vulputate. Phasellus venenatis tellus ac neque
        pharetra, eu sagittis eros porttitor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        mauris leo, tincidunt et hendrerit volutpat, viverra sit amet turpis.
        Vivamus odio orci, vulputate sit amet ultrices nec, ullamcorper eget
        velit. Mauris porttitor orci quis lorem tristique pretium non eu felis.
        Suspendisse vel ligula dolor. Fusce mollis eros sed lorem scelerisque,
        ut fringilla neque suscipit. Sed suscipit nec sapien at facilisis. In
        sed ipsum non velit placerat consequat. Pellentesque vehicula tellus
        eget lacus semper, quis tincidunt est imperdiet. Curabitur felis ligula,
        maximus non interdum vitae, fermentum eget massa. Aliquam egestas sed
        arcu sit amet hendrerit. Donec tincidunt enim nec nibh aliquet, a
        interdum risus sodales. Nam convallis orci orci, et consequat nulla
        imperdiet eu. Donec feugiat felis iaculis dignissim facilisis. Praesent
        molestie accumsan vulputate. Phasellus venenatis tellus ac neque
        pharetra, eu sagittis eros porttitor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        mauris leo, tincidunt et hendrerit volutpat, viverra sit amet turpis.
        Vivamus odio orci, vulputate sit amet ultrices nec, ullamcorper eget
        velit. Mauris porttitor orci quis lorem tristique pretium non eu felis.
        Suspendisse vel ligula dolor. Fusce mollis eros sed lorem scelerisque,
        ut fringilla neque suscipit. Sed suscipit nec sapien at facilisis. In
        sed ipsum non velit placerat consequat. Pellentesque vehicula tellus
        eget lacus semper, quis tincidunt est imperdiet. Curabitur felis ligula,
        maximus non interdum vitae, fermentum eget massa. Aliquam egestas sed
        arcu sit amet hendrerit. Donec tincidunt enim nec nibh aliquet, a
        interdum risus sodales. Nam convallis orci orci, et consequat nulla
        imperdiet eu. Donec feugiat felis iaculis dignissim facilisis. Praesent
        molestie accumsan vulputate. Phasellus venenatis tellus ac neque
        pharetra, eu sagittis eros porttitor.
      </p>
    </div>
  );
};
export default ModalPage;

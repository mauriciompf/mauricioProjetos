import { useEditAlbumContext } from "../context/EditAlbumContext";
import isMatchingId from "../pages/isMatchingId";
import { regexImageFile, SIZELIMIT } from "../utils/constants";

const useEditAlbumUtils = () => {
  const { setEditAlbumBoxes, albumBoxes } = useEditAlbumContext();

  const closeEditAlbum = (id: number) => {
    return setEditAlbumBoxes((prev) => prev.filter((album) => album.id !== id));
  };

  const uploadValidImage = (
    files: (File | string)[] | FileList | null,
    id: number,
  ) => {
    if (!files || files.length < 1) return;

    // Convert files to array
    const validFiles = Array.from(files)
      .filter((file) => file instanceof File)
      .filter((file) =>
        !regexImageFile.test(file.name)
          ? alert("Somente imagens devem ser usadas.")
          : true,
      )
      .filter((file) =>
        file.size > SIZELIMIT
          ? alert(`A imagem é muito grande e não será adicionada.`)
          : true,
      );

    if (validFiles.length < 1) return;

    validFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file as Blob); // Read the content and convert each file object to a Data URL

      reader.addEventListener("load", () => {
        const url = reader.result as string; // base64-encoded string (Data URL) representing the file

        // Insert url image to state
        setEditAlbumBoxes((prev) =>
          prev
            .filter(isMatchingId(id))
            .map((album) => ({ ...album, images: [...album.images, url] })),
        );
      });
    });
  };

  const validateInputTitle = (title: string, id: number) => {
    if (!title) {
      alert("Adicione um título para o álbum");
      return;
    }

    const AlbumTitles = albumBoxes
      .filter((album) => album.id !== id)
      .map((album) => album.title);
    // Prevent insert the title again
    if (AlbumTitles.includes(title)) {
      alert("Já está criado um álbum com este mesmo nome");
      return;
    }

    return true;
  };

  return { closeEditAlbum, uploadValidImage, validateInputTitle };
};
export default useEditAlbumUtils;
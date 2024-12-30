document.addEventListener("DOMContentLoaded", () => {
    const inputFiles  = document.querySelectorAll("[data-preview-img-target]");
    if(inputFiles.length === 0) {
        return false;
    }

    inputFiles.forEach(el => {
        el.addEventListener("change", e => {
            const file = e.target.files[0];
            if(file) {
                const objectUrl = URL.createObjectURL(e.target.files[0]);
                const targetPreviewName = e.target.dataset.previewImgTarget;
                const targetPreview = document.querySelector(`[data-preview-img-source="${targetPreviewName}"]`);

                targetPreview.src = objectUrl;
                targetPreview.onload = () => {
                    URL.revokeObjectURL(objectUrl);
                }

            }
        })
    })
})
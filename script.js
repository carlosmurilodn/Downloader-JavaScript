const urlInput = document.querySelector("input")
const downloadBrtn = document.querySelector("button")

downloadBrtn.addEventListener("click", async () => {
    try {
        const response = await fetch(urlInput.value)
        const file = await response.blob()
        const link = document.createElement("a")
        link.href = URL.createObjectURL(file)
        link.download = new Date().getMonth()
        link.click()
    } catch (error) {
        alert("Failed")
    }
})
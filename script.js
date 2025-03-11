async function downloadVideo() {
    const videoURL = document.getElementById("videoURL").value;
    const statusElement = document.getElementById("status");

    if (!videoURL) {
        statusElement.textContent = "Please enter a valid YouTube URL.";
        return;
    }

    statusElement.textContent = "Fetching download link...";

    try {
        const response = await fetch(`YOUR_BACKEND_API_ENDPOINT?url=${encodeURIComponent(videoURL)}`);
        const data = await response.json();

        if (data.success) {
            window.location.href = data.downloadUrl;
        } else {
            statusElement.textContent = "Failed to fetch the video. Try again.";
        }
    } catch (error) {
        statusElement.textContent = "Error fetching video.";
    }
}

// Your script here.
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const ttsForm = document.getElementById('tts-form');
    const textInput = document.getElementById('text-input');
    const voiceSelect = document.getElementById('voice-select');
    const startButton = document.getElementById('start-button');
    const stopButton = document.getElementById('stop-button');

    // Get available voices
    const getVoices = () => {
        const voices = speechSynthesis.getVoices();
        voices.forEach(voice => {
            const option = document.createElement('option');
            option.value = voice.name;
            option.textContent = voice.name;
            voiceSelect.appendChild(option);
        });
    };

    // Initialize voices
    getVoices();
    speechSynthesis.onvoiceschanged = getVoices;

    // Start speech
    startButton.addEventListener('click', () => {
        const utterance = new SpeechSynthesisUtterance(textInput.value);
        utterance.voice = speechSynthesis.getVoices().find(v => v.name === voiceSelect.value);
        speechSynthesis.speak(utterance);
    });

    // Stop speech
    stopButton.addEventListener('click', () => {
        speechSynthesis.cancel();
    });
});

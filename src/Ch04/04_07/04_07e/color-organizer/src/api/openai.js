export async function fetchChatGPTResponse(
  prompt,
  temperature
) {
  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`
      },
      body: JSON.stringify({
        model: "gpt-4.1",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        temperature
      })
    }
  );
  const data = await response.json();
  if (!response.ok) {
    console.error("Error from OpenAI", data);
    throw new Error("Failed to fetch color name");
  }
  return data.choices?.[0]?.message?.content?.trim() || "";
}

export async function getColorNameFromAPI(hex) {
  const prompt = `What would be a creative and friendly name for the color ${hex}? Just return the name, nothing else.`;
  return fetchChatGPTResponse(prompt, 0.7);
}

export async function getAIRatingFromAPI(title, hex) {
  const prompt = `Rate the color ${title} (${hex}) from 1 to 5 stars. Only respond with a number between 1 and 5.`;
  return fetchChatGPTResponse(prompt, 0.5);
}

export async function describeColorWithAI(title, hex) {
  const prompt = `In one short creative sentence, describe the mood or emotional vibe of the color ${title} ${hex}. Keep it under 5 words.`;
  return fetchChatGPTResponse(prompt, 0.7);
}

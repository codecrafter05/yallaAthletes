import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const hardcodedAnswers = [
  "Hello! How can I assist you today?",
  "Certainly, I'm here to help what kind Problem",
  "Feel free to ask any questions you have.",
  "1- Check if the photo is uploaded successfully 2-Check if the photo size is less than 30MB  3- Ensure that your account is approved  4- Logout from the website then log in again",
  "I'm sorry, I can't provide assistance in this case. Please contact our hotline 17711111 or visit our office in Seef area, Bahrain.",
  "Your most welcome! now I should leave because I need to go back to Sayed Mohammed and Rashid project, See you Later",

];

const SupportPage = () => {
  const [input, setInput] = useState("");
  const [answerIndex, setAnswerIndex] = useState(0);
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = () => {
    if (input.trim() !== "") {
      const userMessage = { id: Date.now(), text: input, sender: "user" };
      setChatHistory((prevChat) => [...prevChat, userMessage]);

      const botMessage = {
        id: Date.now() + 1,
        text: hardcodedAnswers[answerIndex],
        sender: "bot",
      };

      setChatHistory((prevChat) => [...prevChat, botMessage]);

      setInput("");
      setAnswerIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Box sx={{ height: "89vh", display: "flex", flexDirection: "column" }}>
      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {chatHistory.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </Box>
      <Box sx={{ p: 2, backgroundColor: "background.default" }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              fullWidth
              placeholder="Type a message"
              value={input}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              size="large"
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleSend}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Message = ({ message }) => {
  const isBot = message.sender === "bot";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isBot ? "flex-start" : "flex-end",
        mb: 2,
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          p: 1,
          backgroundColor: isBot ? "primary.light" : "secondary.light",
        }}
      >
        <Typography variant="body1">{message.text}</Typography>
      </Paper>
    </Box>
  );
};

export default SupportPage;

/** @jsxImportSource theme-ui */
import {Alert, Box, Button, Divider, Heading, Message} from "theme-ui";

export default function App() {
    return (
        <Box sx={{p: 4}}>
            <Heading as="h1" mb={4} sx={{mb: 1}}>
                Hello App with sx
            </Heading>
            <Divider my={4}/>
            <Alert variant="primary" sx={{mb: 1}}>Primary Alert with sx</Alert>
            <Button variant="primary" sx={{bg: 'red'}}>Primary Button without sx</Button>
            <Message variant="primary" sx={{bg: 'secondary'}}>Primary Message with sx</Message>
        </Box>
    );
}


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Task } from '../types';


type TasksProps = {
    tasks: Task[],
}

export function CardList({ tasks }: TasksProps) {

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Nome da Tarefa
                </Typography>
                <Button
                    variant="contained"
                    color="error"
                    endIcon={<DeleteIcon />}
                    sx={{ marginTop: 2 }}
                >
                    Excluir
                </Button>
            </CardContent>
        </Card>
    );
};
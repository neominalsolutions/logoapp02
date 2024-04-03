import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';

export type MediaButton = {
	text: string;
	icon?: string;
	type: string;
};

export type MediaCardProps = {
	imageUrl: string;
	title: string;
	description: string;
	buttons: MediaButton[];
	onButtonClick?: (type: string) => void; // action Props
};

export default function MediaCard({
	imageUrl,
	title,
	description,
	buttons,
	onButtonClick,
}: MediaCardProps) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia sx={{ height: 140 }} image={imageUrl} title="green iguana" />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				{buttons.map((btn: MediaButton, index: number) => {
					return (
						<span key={index}>
							<Button
								onClick={() => {
									// hangi butonun hangi tipte fırlatılacağını gönderdik.
									// onButtonClick prop undefined değilse çalışacak
									if (onButtonClick) {
										onButtonClick(btn.type);
									}
								}}
								key={index}
								size="small"
							>
								{btn.text}
							</Button>
						</span>
					);
				})}
			</CardActions>
		</Card>
	);
}

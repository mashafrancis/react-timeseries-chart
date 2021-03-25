import {
	Card,
	Grid,
	CardContent,
	CardHeader,
} from '@material-ui/core';
import clsx from 'clsx';

import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ChartCardProps } from './interfaces';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			height: '-webkit-fit-content',
		},
		details: {
			display: 'flex',
			flexDirection: 'row',
		},
		content: {
			flex: '1 0 auto',
			flexDirection: 'row',
			width: '100%',
		},
		title: {
			fontWeight: 500,
			backgroundColor: 'rgba(25, 103, 210, 0.11)',
			padding: '6px 20px',
			borderRadius: 6,
			width: 'fit-content',
		},
		cardPaper: {
			borderRadius: 16,
		},
		image: {
			width: 128,
			height: 128,
		},
		subInfoText: {
			fontWeight: 500,
		},
		mainCard: {
			height: '-webkit-fit-content',
			padding: 30
		},
		action: {
			margin: 0,
		},
	}),
);

const ChartCard = ({
	heading,
	actionItem,
	body,
	styles,
}: ChartCardProps): JSX.Element => {
	const classes = useStyles();
	return (
		<Grid item xs={12} className={classes.mainCard}>
			<Card
				className={clsx(classes.root, classes.cardPaper)}
				variant="outlined"
				data-testid="dashboard-card"
				style={styles}
			>
				<CardHeader
					classes={{
						action: classes.action,
					}}
					title={
						<Typography
							className={classes.title}
							variant="subtitle2"
							color="primary"
						>
							{heading}
						</Typography>
					}
					action={actionItem}
				/>
				<CardContent className={classes.content}>
					<Grid
						item
						container
						direction="column"
						justify="center"
						alignItems="center"
						spacing={2}
						style={{ display: 'flex', textAlign: 'center', margin: 0 }}
						xs={12}
					>
						{body}
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default ChartCard;

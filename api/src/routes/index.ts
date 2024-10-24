import repoRouter from './repo';

const router = (app:any) => {
    app.use("/repos", repoRouter);
}

export default router;

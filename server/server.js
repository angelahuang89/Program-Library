import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import useWebpackMiddleware from './environment/useWebpackMiddleware';
import { Program, Section } from '../database/models/schema';

const app = express();
const assets = path.join(__dirname, '../client/');

useWebpackMiddleware(app);
app.use(express.static(assets));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(`${assets}.index.html`);
});

app.get('/programs', async (req, res) => {
  const programs = await Program.query();
  res.json(programs);
});

app.get('/programs/:id', async (req, res) => {
  const program = await Program
    .query()
    .findById(req.params.id)
    .eager('[sections(selectNameIdOverviewAndOrder, orderByOrder)]', {
      selectNameIdOverviewAndOrder: (builder) => {
        builder.select('name', 'id', 'overview_image', 'order_index');
      },
      orderByOrder: (builder) => {
        builder.orderBy('order_index');
      },
    });
  res.json(program);
});

app.get('/sections/:id', async (req, res) => {
  const section = await Section
    .query()
    .findById(req.params.id);
  res.json(section);
});

export default app;

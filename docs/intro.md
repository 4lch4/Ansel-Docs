---
sidebar_position: 1
---

# Intro

Ansel is an API for interacting with an S3 (B2 support in the works) compatible storage method. To serve that end, there are only a few endpoints for managing CRUD operations. Below is a quick overview of the available endpoints and the HTTP method associated with each type of request that's available (note that all endpoints are prefixed with `/api/v1`):

:::info

The ID of an asset is simply an integer where the first asset in a folder has an ID of `0` and the next asset would be `1`. For example, if we uploaded a gif to folder `test` and it was the first asset, it would have a name of `/test/0.gif` where 0 is the ID and test is the folder name.

:::

- `/list`
  - **GET** — Get a list of top-level folders in the bucket.
- `/:folderName`
  - **GET** — Get a random item from the folder with the given `:folderName`.
    - The API will get the amount of items in the folder, then pick one at random to return.
  - **POST** — Upload a new asset under `:folderName` and assign it the next ID in the sequence.
- `/:folderName/:id`
  - **GET** — Gets a specific item from the folder with the given `:folderName` that has the same `:id`.
  - **POST** — Upload a new asset under the specific `:folderName` with the given `:id`.
  - **PUT** — Update an existing asset under `:folderName` with an ID that matches `:id`.
  - **DELETE** — Delete an existing asset under `:folderName` with an ID that matches `:id`.

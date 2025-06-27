import request from "supertest";
import { app } from "../../app";

it('Give the details about current user', async () => {
    const cookie = await global.signup();

    const res = await request(app)
        .get('/api/users/current-user')
        .set("Cookie", cookie)
        .send()
        .expect(200)

    expect(res.body.currentUser.email).toEqual("test@test.com");
})

it('Return Null if not authenticated', async () => {
    const cookie = await global.signup();

    const res = await request(app)
        .get('/api/users/current-user')
        .send()
        .expect(200)

    expect(res.body.currentUser).toEqual("test@test.com");
})

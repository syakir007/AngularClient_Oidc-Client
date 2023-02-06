export class Profile {
    public amr: string[];
    public sid: string;
    public sub: string;
    public auth_time: string;
    public idp: string[];
    public email: string;
    public name: string;
    public given_name: string;
    public family_name: string;
    public website: string;
    public role: string[];
    public username: string;
    public email_verified: boolean;

    constructor(
        amr: string[],
        sid: string,
        sub: string,
        auth_time: string,
        idp: string[],
        email: string,
        name: string,
        given_name: string,
        family_name: string,
        website: string,
        role: string[],
        username: string,
        email_verified: boolean
    ){
        this.amr = amr;
        this.sid = sid;
        this.sub = sub;
        this.auth_time = auth_time;
        this.idp = idp;
        this.email = email;
        this.name = name;
        this.given_name = given_name;
        this.family_name =  family_name;
        this.website = website;
        this.role = role;
        this.username = username;
        this.email_verified = email_verified;
    }
}
-- Table: public.address

-- DROP TABLE public.address;

CREATE TABLE public.address
(
    "ID" integer NOT NULL,
    line_1 text COLLATE pg_catalog."default",
    line_2 text COLLATE pg_catalog."default",
    state text COLLATE pg_catalog."default",
    city text COLLATE pg_catalog."default",
    country text COLLATE pg_catalog."default",
    postal_code integer,
    CONSTRAINT master_address_pkey PRIMARY KEY ("ID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.address
    OWNER to postgres;





-- Table: public.centre

-- DROP TABLE public.centre;

CREATE TABLE public.centre
(
    "ID" integer NOT NULL,
    "Name" text COLLATE pg_catalog."default",
    "Address" text COLLATE pg_catalog."default",
    "Status" boolean,
    CONSTRAINT centre_pkey PRIMARY KEY ("ID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.centre
    OWNER to postgres;





-- Table: public.kyc

-- DROP TABLE public.kyc;

CREATE TABLE public.kyc
(
    id integer NOT NULL,
    aadhar_card bigint,
    pan_card text COLLATE pg_catalog."default",
    passport text COLLATE pg_catalog."default",
    phone_number bigint,
    name text COLLATE pg_catalog."default",
    email text COLLATE pg_catalog."default",
    CONSTRAINT kyc_pkey PRIMARY KEY (id),
    CONSTRAINT kyc_id_fkey FOREIGN KEY (id)
        REFERENCES public.member (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.kyc
    OWNER to postgres;







-- Table: public.kyc_id

-- DROP TABLE public.kyc_id;

CREATE TABLE public.kyc_id
(
    "ID" integer NOT NULL,
    "Type" text COLLATE pg_catalog."default",
    CONSTRAINT kyc_id_pkey PRIMARY KEY ("ID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.kyc_id
    OWNER to postgres;







-- Table: public.member

-- DROP TABLE public.member;

CREATE TABLE public.member
(
    id bigint NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    mobile_number bigint NOT NULL,
    dob date,
    marital_status text COLLATE pg_catalog."default",
    centre_id bigint NOT NULL,
    gender text COLLATE pg_catalog."default" NOT NULL,
    alias_name text COLLATE pg_catalog."default",
    CONSTRAINT member_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.member
    OWNER to postgres;


-- Table: public.login

-- DROP TABLE public.login;

CREATE TABLE public.login
(
    id integer NOT NULL,
    username character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT login_details_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.login
    OWNER to postgres;
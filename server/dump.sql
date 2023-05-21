--
-- PostgreSQL database dump
--

-- Dumped from database version 12.14
-- Dumped by pg_dump version 12.14

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: art; Type: TABLE; Schema: public; Owner: lshi
--

CREATE TABLE public.art (
    id integer NOT NULL,
    description text,
    imageurl text
);


ALTER TABLE public.art OWNER TO lshi;

--
-- Name: art_id_seq; Type: SEQUENCE; Schema: public; Owner: lshi
--

CREATE SEQUENCE public.art_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.art_id_seq OWNER TO lshi;

--
-- Name: art_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lshi
--

ALTER SEQUENCE public.art_id_seq OWNED BY public.art.id;


--
-- Name: art id; Type: DEFAULT; Schema: public; Owner: lshi
--

ALTER TABLE ONLY public.art ALTER COLUMN id SET DEFAULT nextval('public.art_id_seq'::regclass);


--
-- Data for Name: art; Type: TABLE DATA; Schema: public; Owner: lshi
--

COPY public.art (id, description, imageurl) FROM stdin;
6	Trees 5X5	https://picsum.photos/205
5	City View 4X4	https://picsum.photos/204
8	By the sea 10X10	https://picsum.photos/207
3	Holiday 4X5	https://picsum.photos/202
\.


--
-- Name: art_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lshi
--

SELECT pg_catalog.setval('public.art_id_seq', 1, false);


--
-- Name: art art_pkey; Type: CONSTRAINT; Schema: public; Owner: lshi
--

ALTER TABLE ONLY public.art
    ADD CONSTRAINT art_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--


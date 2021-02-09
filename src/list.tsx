import React from "react";
import { Link, generatePath } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Card from "@material-ui/core/Card";
import { Column, Row, Item } from "@mui-treasury/components/flex";
import Toolbar from "@material-ui/core/Toolbar";
import { useDebounce } from "use-debounce";
import { Filter1Rounded } from "@material-ui/icons";
interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Barlow, san-serif",
    fontWeight: 600,
    color: "#122740",

    fontSize: "2rem",
  },
  text: {
    fontFamily: "Barlow, san-serif",
    fontWeight: 400,
    fontSize: "1rem",
    color: "#122740",
  },
  subtitle: {
    fontFamily: "Barlow, san-serif",
    fontWeight: 600,
    fontSize: "1rem",
    color: "#122740",
  },
  button: {
    margin: theme.spacing(1),
    padding: "5px",
    width: "150px",
  },
  searchbar: {
    width: "30%",
    borderRadius: 5,
    boxShadow: "0 1px 5px 0 #BDC9D7",
    overflow: "hidden",
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-around",
  },
  card: {
    width: "300px",
    borderRadius: 16,
    boxShadow: "0 2px 5px 0 #BDC9D7",
    overflow: "hidden",
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-around",
  },
  link: {
    fontWeight: 600,
    fontFamily: "Barlow, san-serif",
    color: "#2281bb",
    padding: "0 0.25rem",
    fontSize: "0.875rem",
    textDecoration: "none",
  },
  img: {
    padding: "5px",
    width: "5rem",
    borderRadius: "100px",
  },
}));

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [filter, setFilter] = React.useState("lemoncode");
  const [debouncedFilter] = useDebounce(filter, 500);
  const classes = useStyles();

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${filter}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [debouncedFilter]);

  return (
    <>
      <h2 className={classes.title}>Hello from List page</h2>
      <div>
        <Toolbar className={classes.searchbar}>
          <input
            style={{ width: "80%", height: "25px" }}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <Button
            variant="outlined"
            color="primary"
            size="small"
            type="submit"
            className={classes.button}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </Toolbar>

        {members.map((member) => (
          <Card key={member.id} className={classes.card}>
            <Item>
              <img src={member.avatar_url} className={classes.img} />
            </Item>
            <Row>
              <Item>
                <div>
                  <h3 className={classes.subtitle}>Id</h3>
                  <span className={classes.text}>{member.id}</span>
                </div>
              </Item>
              <Item>
                <div style={{ margin: "0px 6px " }}>
                  <h3 className={classes.subtitle}>User</h3>
                  <Link
                    className={classes.link}
                    to={generatePath("/detail/:id", { id: member.login })}
                  >
                    {member.login}
                  </Link>{" "}
                </div>
              </Item>
            </Row>
          </Card>
        ))}
      </div>
    </>
  );
};

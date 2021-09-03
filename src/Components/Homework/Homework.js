import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  box: { backgroundColor: "green" },
});

export default function Homework() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {" "}
          Bài 26
        </Typography>
        <Typography variant="h5" component="h2">
          Tên bài{" "}
        </Typography>
        <Typography variant="body1" component="p">
          Bài tập 1 <br />
        </Typography>
        <Typography variant="body2" component="p">
          例. シャラー（の）お湯（が）出ません
        </Typography>
        <Typography variant="body2" component="p" className="row">
          １．9時半　 [____の_____] 新幹線 [_____に____] 間に合いませんでした。
        </Typography>
        <br />
        <Typography variant="body2" component="p" className="row">
          ２．学校　 [____に_____] おくれたこどがありませんか
        </Typography>
        <br />
        <Typography variant="body2" component="p" className="row">
          ３. エアコン　の　調子　が　悪いんでしが。どこ [______で___]
          連絡　したらいいでしか。。
        </Typography>
        <br />
        <Typography variant="body2" component="p" className="row">
          ４．ごみ　は　駐車場　 [_____の____]
          横　[_____の____]　ごみ　置き場　[____で_____]　でしてください。
        </Typography>
        <br />
        <Typography variant="body1" component="p">
          Bài tập ２ <br />
        </Typography>
        <Typography variant="body2" component="p" className={classes.box}>
          いいです、悪かったです、下手です、病気です、遅れました、故障しました、書きます、来ませんでした、休みじゃありません、食べません、しています。。
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          例。何　を　探しているんでしが。…ここに　置いた　手帳がないんです
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          1．どうして　ケーキ　を　　[_____食べる____]んですか？…今　ダイエット　を　[_________]　んです。
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          ２．どうして　会議の時間　に　　[_____遅れる____]んですか。…車　が　[_____わるかった____]　んです。
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          ３．先週のお花見、どうして　「＿＿＿」んですか。
          …ちょっと　都合　が　「」んです。
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          4．土曜日　遊び　に　来ませんでしか。…すみません。今度
          　土曜日　は　「」んです。
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          5．今晩飲みに　行きませんか…すみません、妻　が　「」んです。
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          6．いつも　パンコン　で　手紙を　「」んです。{" "}
          …ええ、私　は　🈑　が　「」んです。
        </Typography>
        <br />
        <Typography variant="body1" component="p">
          Bài tập 3 <br />
        </Typography>
        <Typography variant="body2" component="p">
          例。今朝は　｛何が、何も、何でも｝たべませんでした。
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          １．朝は　いつも　五時　ごろ　起きます。
          ｛特に、ずいぶん、たくさん｝早いんですね。
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          ２．｛こんど、最近、もうすぐ｝の　日曜日に　｛どこでも、どこが、どこへ｝遊びに
          行きませんか。…いいですね。
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          3.高橋さん、その手帳、いいですね。私の｛こんな、そんな、アンナ｝手帳が欲しいんです。どこで買ったんですか。。
          …エドヤストア　です。手帳の｛乗り場、置き場、売り場｝は　1階の奥に　あります。{" "}
        </Typography>
        <br />
        <Typography variant="body1" component="p">
          Bài tập ４ <br />
        </Typography>
        <Typography variant="body2" component="p">
          例。たばこを吸ってもいいですか。 …すみません、ここは禁煙なんです。
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          1。食事　に　行きませんか …すみません、今　ちょっと　おなか　が「」
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          ２．よく　テレビを　みますか。…いいえ、あまり見ません。じかんが「」。じかんが「」{" "}
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          3．きれいな桜の写真ですね ええ、奈良のお寺で「」「」
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          4．ずいぶんにぎやかですね。 …ええ、隣の部屋でパーティーを「」{" "}
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          5．自分で食事をつくりますか。…いいえ、料理があまり「」{" "}
        </Typography>
        <br />
        <Typography variant="body1" component="p">
          Bài tập ５ <br />
        </Typography>
        <br />
        <Typography variant="body2" component="p" className={classes.box}>
          行きたいです、遅れました、できません、故障です、痛いです、しなければなりませ、書きました、習いたいです、結婚しますします
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          例1。。{" "}
        </Typography>
        <br />
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

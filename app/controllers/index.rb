get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/login' do
  player1= Player.find_or_create_by_name(params[:firstname])
  player2=Player.find_or_create_by_name(params[:secondname])
  game = Game.create
  game.players << player1
  game.players << player2
  redirect "/game/#{game.id}"
end

get '/game/:game_id' do
 @game = Game.find_by_id(params[:game_id])
 @player1 =@game.players.first
 @player2 =@game.players.last 
 erb :game
end

put '/results' do
game = Game.find(params[:game_id])
game.winner = Player.find(params[:winner_id])
game.save
end


get '/' do
  # La siguiente linea hace render de la vista 
  # que esta en app/views/index.erb
  @post = Post.all
  erb :index
end

post '/upload' do
  comment_data = params[:comment]
  author_data = params[:author]
  post = Post.new do |u|
    u.comment = comment_data
    u.author = author_data
    puts u.save!
  end
end